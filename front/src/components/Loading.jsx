import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Loading() {
  return (
    <Container>
      <Loader
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </Container>
  )
}

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Loader = styled(motion.div)`
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;
