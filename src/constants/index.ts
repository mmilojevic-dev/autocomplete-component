import { TeamType } from 'types'

export const TRANSLATIONS = {
  FILTER_ERROR_MESSAGE: 'An error occurred while filtering data.',
  NETWORK_RESPONSE_ERROR_MESSAGE: 'Network response failed.',
  FETCH_ERROR_MESSAGE: 'There was a problem with the fetch operation:',
  UNKNOWN_ERROR_MESSAGE: 'An unknown error occurred:',
  AUTOCOMPLETE_INPUT_PLACEHOLDER_MESSAGE:
    'Search for your favorite NBA team...',
  NO_ITEMS_DROPDOWN_MESSAGE: 'No teams found...'
}

export const TEAM_INITIAL_DATA: TeamType = {
  abbrevation: '',
  city: '',
  conference: '',
  division: '',
  full_name: '',
  name: ''
}

export const NBA_TEAMS_ENDPOINT = 'https://www.balldontlie.io/api/v1/teams'

export const DEBOUNCE_DELAY = 1200

export const FAKE_RESPONSE_DELAY = 500

export const TEAM_NAME_DISPLAY_KEY: keyof TeamType = 'full_name'
