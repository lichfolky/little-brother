import { ref, watch, computed } from 'vue'
import { defineStore } from 'pinia'
import { Octokit, App } from "octokit";

export const useRepoStore = defineStore('repoStore', () => {
  console.log(import.meta.env.VITE_GITHUB_API_KEY)
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_API_KEY
  });

  const user = ref('lichfolky');
  const repo = ref('grimoire');
  const commits = ref({});


  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user'))
  }

  if (localStorage.getItem('repo')) {
    repo.value = JSON.parse(localStorage.getItem('repo'))
  }

  watch(user, () => localStorage.setItem('user', JSON.stringify(user.value)))
  watch(repo, () => localStorage.setItem('repo', JSON.stringify(repo.value)))

  async function getCommits() {

    commits.value = await octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: user.value,
      repo: repo.value,
    }).then((resp) => resp.data)
      .then((data) => data.map((commitObj) => ({ url: commitObj.html_url, message: commitObj.commit.message, date: commitObj.commit.author.date })))
      .catch(err => [])
  }

  return { user, repo, commits, getCommits }
})
