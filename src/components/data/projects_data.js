  
import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const data_projects = [
    

    {
        name: 'Runtime tracker',
        image:blinking,
        github_url: 'https://github.com/amanjots19/Data-Analysis-Internship/tree/master/Final%20Mini%20Project',
        category: ['Data Analysis']
    },

    {
        name: 'Most Affected State due to Covid-19 pandemic',
        image: COVID,
        github_url: 'https://github.com/amanjots19/Data-Analysis-Internship/tree/master/Final%20Project',
        category: ['Data Analysis']
    },

    {
        name: 'Portfolio',
        image: portfolio,
        deployed_url: "amansky.netlify.app",
        github_url: 'https://github.com/amanjots19',
        category: ['React']
    },

    {
        name: 'E-commerce',
        image: hardware_store,
        deployed_url: '!#',
        category: ['MERN Stack']
    }

    

]

export default data_projects;