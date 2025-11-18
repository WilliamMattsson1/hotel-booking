import ExclusiveOffers from '../components/ExclusiveOffers'
import FeatureDestination from '../components/FeatureDestination'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'

const Homepage = () => {
    return (
        <>
            <Hero />
            <FeatureDestination />
            <ExclusiveOffers />
            <Testimonial />
            <Newsletter />
        </>
    )
}

export default Homepage
