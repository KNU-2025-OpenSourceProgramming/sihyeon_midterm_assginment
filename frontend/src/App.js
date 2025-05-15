import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Audio Recorder</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <h2>Audio Transcription App</h2>
        <p>Recording functionality will be implemented soon.</p>
      </div>
    </Container>
  );
}

export default App;
