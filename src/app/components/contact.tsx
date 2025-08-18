export default function Contact(){
    return (
        <section  id='contact' className="py-4 px-6 bg-black my-10 flex items-center justify-center ">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Image */}
                <img
                    src="/images/contactimg.png"
                    alt="Contact Illustration"
                    className="w-80 h-96 object-cover bg-gray-700 flex-shrink-0"
                />

                {/* Text + Quote + Icons */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-5xl font-bold mb-4 text-white font-['BL-Melody']">
                        Contact Us
                    </h3>

                    <blockquote className="text-3xl md:text-2xl italic text-white font-serif mb-8">
                        "The trees can hear you if you talk with them."
                    </blockquote>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://web.facebook.com/theblackbird.singapore" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/facebook.png" alt="facebook" className="inline ml-2 w-10 h-10" />
                        </a>
                        <a href="https://www.instagram.com/theblackbird.sg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.png" alt="instagram" className="inline ml-2 w-11 h-11" />
                        </a>
                        <a href="/files/menu.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/whatsapp.png" alt="whatsapp" className="inline ml-2 w-10 h-10" />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}