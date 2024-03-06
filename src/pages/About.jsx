import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:'bold',
          my:2,
          
        },
        "& p":{
          textAlign:'justify',
        }
      }}>
        <Typography variant='h4'>
          Welcome to My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime hic excepturi unde autem harum recusandae minima ducimus officiis similique, nesciunt velit repellendus neque quod rerum? Laudantium ad quasi quas.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequatur assumenda ducimus et dicta, enim placeat sequi officiis accusantium repellendus impedit voluptas a nihil possimus earum, dignissimos reprehenderit sunt minus voluptates nulla est quidem corporis. Omnis quasi corporis ea quisquam architecto, dicta voluptatum expedita tenetur exercitationem aspernatur optio ducimus unde et natus ut, beatae obcaecati repellendus aut non, enim assumenda qui magnam voluptatem est. Mollitia quas quos exercitationem inventore nisi vel harum voluptates odio tempora praesentium eos sunt omnis quibusdam hic dicta provident vitae autem obcaecati ex non quisquam soluta, officiis impedit! Velit blanditiis id in rerum consequuntur debitis dicta?
        </p>
      </Box>
    </Layout>
  )
}

export default About