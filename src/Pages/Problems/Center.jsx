import React from 'react'
import Questions from './Questions'
import Cards from './Cards'
import Topics from './Topics'
import TopicTabs from './TopicsTab'
const Center = () => {
  return (
    <div >
      <Cards />
      <Topics />
      <TopicTabs />
      <Questions />
    </div>
  )
}

export default Center