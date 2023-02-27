import '../scss/components/project.scss'
import { FaGithub, FaLink, FaWordpress, FaReact, FaMagento } from "react-icons/fa";

function Project({data}) {
    const { name, images, platform, text, links, technologies} = data;
    let platformIcon = '';

    switch (platform.toLowerCase()) {
        case "wordpress":
            platformIcon = <FaWordpress className="platform-icon" />
            break;
        case "magento":
        case "magento 2":
            platformIcon = <FaMagento className="platform-icon" />
            break;
        case "react":
        case "reactjs":
            platformIcon = <FaReact className="platform-icon" />
            break;
        default:
            platformIcon = '';
    }

    return (
        <div className={`project ${images.hover ? "hover" : ""}`}>
            <a href={links.website} target="_blank" rel="external noreferrer nofollow" className="project__images">
                <img className="project__image" src={"/images/projects/" + images.thumbnail} alt={name} />
                {images.hover &&
                    <img className="project__image-hover" src={"/images/projects/" + images.hover} alt={name} />
                }
            </a>
            <div className="project__content">
                <div>
                    <div className="project__header">
                        <h3 className="project__title">{name}</h3>

                        {platform &&
                            <div className="project__platform"><span>{platform}</span> {platformIcon}</div>
                        }
                    </div>

                    {text &&
                        <div className="project__text">{text}</div>
                    }
                </div>
                
                {technologies &&
                    <div className="project__technologies">{technologies}</div>
                }

                {links &&
                    <div className="project__links">
                        {links.github &&
                            <a href={links.github} className="project__link" title={links.github} target="_blank" rel="external noreferrer nofollow"><FaGithub /></a>
                        }
                        {links.website &&
                            <a href={links.website} className="project__link" title={links.website} target="_blank" rel="external noreferrer nofollow"><FaLink /></a>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Project;