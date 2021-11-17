import { createStore } from 'redux'
import { projects } from '../mock/projects.json'
import { amdocsProductsList, developmentTechnologiesList } from '../mock/general.json'

const projectsReducer = (
  state = {
    projects: projects,
    amdocsProductsList: amdocsProductsList,
    developmentTechnologiesList: developmentTechnologiesList,
  },
  action
) => {
  return state
}

const store = createStore(
  projectsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
