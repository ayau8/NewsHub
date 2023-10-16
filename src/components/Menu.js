import AllApps from '../image/all-apps.png'
import Business from '../image/global-business.png'
import Entertainment from '../image/production.png'
import Health from '../image/health.png'
import Science from '../image/science.png'
import Sports from '../image/sports.png'
import Technology from '../image/technology.png'

function Menu({ active, setActive, setCategory }) {

  const links = [
    { id: 1, name: "General", value: "general", icon: AllApps },
    { id: 2, name: "World", value: "world", icon: Business },
    { id: 3, name: "Nation", value: "nation", icon: Entertainment },
    { id: 4, name: "Business", value: "business", icon: Health },
    { id: 5, name: "Technology", value: "technology", icon: Science },
    { id: 6, name: "Entertainment", value: "entertainment", icon: Sports },
    { id: 7, name: "Science", value: "science", icon: Technology },
    { id: 7, name: "Sports", value: "sports", icon: Technology },
    { id: 7, name: "Health", value: "health", icon: Technology },
  ]

  function onClick(id, value) {
    setActive(id)
    setCategory(value)
  }

  return (
    <nav className="menu">
      <ul className="text-centre">
        {links.map(link => (
          <li
            key={link.id}
            className={`${active === link.id ? "active" : "inactive"} text-center dark:text-white`}
            onClick={() => onClick(link.id, link.value)}
          >
            <span>{link.name}</span>
            {/* <img
              src={link.icon}
              className="md:hidden opacity-80 duration-300 cursor-pointer"
              alt=" " /> */}
          </li>
        ))}
      </ul>
    </nav >
  )
}

export default Menu
