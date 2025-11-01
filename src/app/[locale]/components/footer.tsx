import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import ContactButton from './contactBtn';
import "@/style/main.css";

export default function Footer() {
    const t = useTranslations('FOOTER');

    return (
        <>
            <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--dark-blue)" fillOpacity="1" d="M0,64L48,69.3C96,74.5,192,85.5,288,85.3C384,85.5,480,74.5,576,80C672,85.5,768,106.5,864,106.7C960,106.5,1056,85.5,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
            </svg>
            <USALProvider>
                <footer className="bg-[var(--dark-blue)] w-full h-auto -mt-1">
                    <div className="flex flex-col h-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full flex-1" data-usal="once fade-u delay-300 threshold-10 duration-800">
                            {/* Logo */}
                            <div className="flex items-center justify-center py-4 order-3 md:hidden lg:flex lg:order-1">
                                <img
                                    src="/img/maxcup-logo-white.webp"
                                    alt="MAX CUP"
                                    className="h-auto max-h-25 object-contain"
                                />
                            </div>
                            {/* Contact */}
                            <div className="py-4 flex flex-col items-center justify-start order-1 md:order-1 lg:order-2">
                                <div className="text-center md-text text-[var(--light-blue)] sintony underline decoration-2 underline-offset-4">
                                    {t("contact")}
                                </div>
                                <a
                                    href="mailto:maxcupsales@max-group.net"
                                    className="xs-text text-center text-[var(--light-blue)] relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--light-blue)] after:transition-transform after:duration-500 hover:after:scale-x-100"
                                >
                                    maxcupsales@max-group.net
                                </a>
                                <span className="xs-text text-center text-[var(--light-blue)]">+36 20 998 8172</span>
                                <div className="flex gap-4 md:gap-2 mt-2">
                                    {/* Facebook */}
                                    <a href="https://www.facebook.com/MaxCupHungary" target="_blank" className="text-[var(--light-blue)] hover:scale-125 transition-transform">
                                        <svg viewBox="0 0 512 512" className="w-7 h-7 md:w-5 md:h-5 fill-current">
                                            <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/maxcuphungary" target="_blank" className="text-[var(--light-blue)] hover:scale-125 transition-transform">
                                        <svg viewBox="0 0 512 512" className="w-7 h-7 md:w-5 md:h-5 fill-current">
                                            <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z" />
                                        </svg>
                                    </a>
                                    {/* Tiktok */}
                                    <a href="https://www.tiktok.com/@maxcuphungary" target="_blank" className="text-[var(--light-blue)] hover:scale-125 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-5 md:h-5 fill-current" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 1000 1000"><path d="M906.25 0H93.75C42.19 0 0 42.19 0 93.75v812.49c0 51.57 42.19 93.75 93.75 93.75l812.5.01c51.56 0 93.75-42.19 93.75-93.75V93.75C1000 42.19 957.81 0 906.25 0zM684.02 319.72c-32.42-21.13-55.81-54.96-63.11-94.38-1.57-8.51-2.45-17.28-2.45-26.25H515l-.17 414.65c-1.74 46.43-39.96 83.7-86.8 83.7-14.57 0-28.27-3.63-40.35-9.99-27.68-14.57-46.63-43.58-46.63-76.97 0-47.96 39.02-86.98 86.97-86.98 8.95 0 17.54 1.48 25.66 4.01V421.89c-8.41-1.15-16.95-1.86-25.66-1.86-105.01 0-190.43 85.43-190.43 190.45 0 64.42 32.18 121.44 81.3 155.92 30.93 21.72 68.57 34.51 109.14 34.51 105.01 0 190.43-85.43 190.43-190.43V400.21c40.58 29.12 90.3 46.28 143.95 46.28V343.03c-28.89 0-55.8-8.59-78.39-23.31z" /></svg>
                                    </a>
                                    {/* Pinterest */}
                                    <a href="https://www.pinterest.com" target="_blank" className="text-[var(--light-blue)] hover:scale-125 transition-transform">
                                        <svg viewBox="0 0 512 512" className="w-7 h-7 md:w-5 md:h-5 fill-current">
                                            <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-260.214,0c10.837,-18.276 24.602,-44.144 30.094,-65.264c3.331,-12.822 17.073,-65.143 17.073,-65.143c8.934,17.04 35.04,31.465 62.807,31.465c82.652,0 142.199,-76.005 142.199,-170.448c0,-90.528 -73.876,-158.265 -168.937,-158.265c-118.259,0 -181.063,79.384 -181.063,165.827c0,40.192 21.397,90.228 55.623,106.161c5.192,2.415 7.969,1.351 9.164,-3.666c0.909,-3.809 5.53,-22.421 7.612,-31.077c0.665,-2.767 0.336,-5.147 -1.901,-7.86c-11.323,-13.729 -20.394,-38.983 -20.394,-62.536c0,-60.438 45.767,-118.921 123.739,-118.921c67.317,0 114.465,45.875 114.465,111.485c0,74.131 -37.438,125.487 -86.146,125.487c-26.9,0 -47.034,-22.243 -40.579,-49.52c7.727,-32.575 22.696,-67.726 22.696,-91.239c0,-21.047 -11.295,-38.601 -34.673,-38.601c-27.5,0 -49.585,28.448 -49.585,66.551c0,24.27 8.198,40.685 8.198,40.685c0,0 -27.155,114.826 -32.132,136.211c-5.51,23.659 -3.352,56.982 -0.956,78.664l0.011,0.004l-103.993,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* Address */}
                            <div className="py-4 flex flex-col items-center justify-start order-2 md:order-3">
                                <div className="text-center md-text text-[var(--light-blue)] sintony underline decoration-2 underline-offset-4">
                                    {t("address")}
                                </div>
                                <a
                                    href="https://maps.app.goo.gl/S6yvPNBsgZ8mwKq36" target="_blank"
                                    className="xs-text text-center text-[var(--light-blue)] relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--light-blue)] after:transition-transform after:duration-500 hover:after:scale-x-100"
                                >
                                    2146 Mogyoród Erdőalja utca 3.
                                </a>
                            </div>
                        </div>
                        <div className='w-full'>
                            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
                                <path fill="var(--very-dark-blue)" d="M0,30L48,40C96,50,192,20,288,30C384,40,480,55,576,35C672,15,768,45,864,35C960,25,1056,10,1152,25C1248,40,1344,50,1392,45L1440,40L1440,60L0,60Z" />
                            </svg>
                            <div className="-mt-1 w-full bg-[var(--very-dark-blue)] flex items-center justify-center p-6 lg:p-2 text-[var(--light-blue)] sintony text-center xs-text">
                                <div>{t("maxcup")}</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </USALProvider>
        </>
    );
}
