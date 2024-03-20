import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

const OverviewComponent = () => {
    return (
        <>
            <h2 className='text-lightMode-dark-grayish-blue-text font-bold text-2xl pb-5'>Overview - Today</h2>

            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {/* First Row */}
                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Page Views</p>
                        <img src={facebook} alt="facebook logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>87</h3>

                        <div className='flex items-center justify-center'>
                            <img src={up} alt="up icon" className='me-2 w-3' />
                            <p className='text-primary-lime-green font-bold'>3%</p>
                        </div>
                    </div>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Likes</p>
                        <img src={facebook} alt="facebook logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>52</h3>

                        <div className='flex items-center justify-center'>
                            <img src={down} alt="down icon" className='me-2 w-3' />
                            <p className='text-primary-bright-red font-bold'>-2%</p>
                        </div>
                    </div>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Likes</p>
                        <img src={instagram} alt="instagram logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>5462</h3>

                        <div className='flex items-center justify-center'>
                            <img src={up} alt="up icon" className='me-2 w-3' />
                            <p className='text-primary-lime-green font-bold'>2257%</p>
                        </div>
                    </div>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Profile Views</p>
                        <img src={instagram} alt="instagram logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>52k</h3>

                        <div className='flex items-center justify-center'>
                            <img src={up} alt="up icon" className='me-2 w-3' />
                            <p className='text-primary-lime-green font-bold'>1375%</p>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Retweets</p>
                        <img src={twitter} alt="twitter logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>117</h3>

                        <div className='flex items-center justify-center'>
                            <img src={up} alt="up icon" className='me-2 w-3' />
                            <p className='text-primary-lime-green font-bold'>303%</p>
                        </div>
                    </div>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Likes</p>
                        <img src={twitter} alt="twitter logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>507</h3>

                        <div className='flex items-center justify-center'>
                            <img src={up} alt="up icon" className='me-2 w-3' />
                            <p className='text-primary-lime-green font-bold'>553%</p>
                        </div>
                    </div>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Likes</p>
                        <img src={youtube} alt="youtube logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>107</h3>

                        <div className='flex items-center justify-center'>
                            <img src={down} alt="down icon" className='me-2 w-3' />
                            <p className='text-primary-bright-red font-bold'>-19%</p>
                        </div>
                    </div>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg p-7'>
                    <div className='flex justify-between items-center pb-5'>
                        <p className='text-lightMode-dark-grayish-blue-text font-bold'>Total Views</p>
                        <img src={youtube} alt="youtube logo" />
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold text-3xl'>1407</h3>

                        <div className='flex items-center justify-center'>
                            <img src={down} alt="down icon" className='me-2 w-3' />
                            <p className='text-primary-bright-red font-bold'>-12%</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OverviewComponent
