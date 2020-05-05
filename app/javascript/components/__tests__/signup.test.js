// As a user
// So that I can collaborate my music with friends
// I would like to sign up to Mix Tape with my Spotify account

import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SignIn from '../SignIn'


test('directs the user to the Spotify login page', () => {
  render(<SignIn />)

  fireEvent.click(screen.getByDisplayValue('SIGN IN WITH SPOTIFY'))

  expect(window.location.pathname).toEqual('/auth/spotify')

})
