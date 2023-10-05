import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import { cards,projects,gigs } from '../../data'
import Container from '../../components/2Container/Container'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import GigCard from '../../components/gigCard/GigCard'


function Home() {
  return (
    <div className="home">

      <Featured/>
      <TrustedBy/>
      <Slide dot slidesToShow={5} arrowsScroll={3}>
      {cards.map(card=>(<CatCard item={card} key={card.id}/>))}  
      </Slide>
      <Container/>

      <Slide slidesToShow={4} arrowsScroll={3}>
      {projects.map(card=>(<ProjectCard item={card} key={card.id}/>))}
      </Slide>
  
    </div>
  )
}

export default Home