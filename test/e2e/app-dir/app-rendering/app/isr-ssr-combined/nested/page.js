import { experimental_use as use } from 'react'

async function getData() {
  return {
    message: 'hello from page',
    nowDuringBuild: Date.now(),
  }
}

export default function nestedPage(props) {
  const data = use(getData())

  return (
    <>
      <p id="page-message">{data.message}</p>
      <p id="page-now">{data.nowDuringBuild}</p>
    </>
  )
}
