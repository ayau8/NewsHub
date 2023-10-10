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
    { id: 2, name: "Business", value: "business", icon: Business },
    { id: 3, name: "Entertainment", value: "entertainment", icon: Entertainment },
    { id: 4, name: "Health", value: "health", icon: Health },
    { id: 5, name: "Science", value: "science", icon: Science },
    { id: 6, name: "Sports", value: "sports", icon: Sports },
    { id: 7, name: "Technology", value: "technology", icon: Technology },
  ]

  function onClick(id, value) {
    setActive(id)
    setCategory(value)
  }

  return (
    <nav className="menu">
      <ul className="text-centre grid grid-cols-4">
        {links.map(link => (
          <li
            key={link.id}
            className={`${active === link.id ? "active" : "inactive"} text-center hover:bg-sky-300`}
            onClick={() => onClick(link.id, link.value)}
          >
            <span className="hidden md:inline ">{link.name}</span>
            <img
              src={link.icon}
              className="md:hidden opacity-80 duration-300 cursor-pointer"
              alt=" " />
          </li>
        ))}
      </ul>
    </nav >
  )
}

export default Menu
