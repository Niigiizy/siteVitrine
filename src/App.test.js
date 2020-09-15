import React from 'react';
import { render } from '@testing-library/react';
import ComposantCompetence from './components/ComposantCompetence';
import ComposantInfoPerso from "./components/ComposantInfoPerso";
import ComposantApercu from "./components/ComposantApercu"

describe('test rendu', () => {
  test('rendu composant competence', () => { 
    render(<ComposantCompetence/>)
  } )
  test('rendu composant Info Perso', () => { 
    render(<ComposantInfoPerso/>)
  } )
  test('rendu composant Apercu', () => { 
    render(<ComposantApercu/>)
  } )
})
