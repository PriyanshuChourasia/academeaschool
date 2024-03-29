import { Link } from 'react-router-dom';
import HeroCss from '../../styles/modules/HomeCss/HomeCss.module.css';
import HeroTailwind from '../../styles/modules/HomeCss/HeroCss/HeroCss.module.css';








const Hero = () => {
    return (
        <div className={`${HeroCss.bgImage} ${HeroTailwind.heroContainer} overflow-hidden`}>
            <div className={`${HeroTailwind.heroGrid}`}>
                <div className={`${HeroTailwind.heroCardBox}`}>
                    <p className={`${HeroTailwind.heroPara1} text-gray-200`}>Back to school</p>
                    <p className={`${HeroTailwind.heroPara2} text-gray-200`}>Welcome to a world of possibilities</p>
                    <p className={`${HeroTailwind.heroPara3} text-gray-200`}>Where your journey begins and every click opens a door to new opportunities.</p>
                    <div className={`${HeroTailwind.heroLinkBox}`}>
                        <Link to={'about'}><p className={`${HeroTailwind.heroLinkPara}`}>Explore the School</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Hero;