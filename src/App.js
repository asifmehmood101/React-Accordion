import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  return (
    <main className='container'>
      <h3>Question and Answers with login</h3>
      <section className='info'>
        {data.map((qa) => {
          return <Question key={qa.id} {...qa} />;
        })}
      </section>
    </main>
  );
}

export default App;
