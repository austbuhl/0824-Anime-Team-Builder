# Anime Team Builder

## Objectives

User should be able to view Character Index
User should be able to click on a Character and add that Character to their team

## Questions

1. What components will we need?
  - App, Character, TeamContainer, CharactersContainer, Header
2. Will we need a container(s)? If so, what containers?
  - Team & Character
    - these will render the same character component
3. Which component should hold the api in state?
  - App should hold the api as both of its children (team & char containers) will need access to the api data
  - Team does not actually need the api data so would put over in the charcontainer
    - by doing this way we don't need to filter/can't filter the api response to give it down to team

4. Will we need state in any other component? What? Why?
  - will need state in the App component to manage our team list

