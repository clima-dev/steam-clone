function Header() {
    return (
        <div className="fixed top-0 z-50 px-4 w-full bg-[#171A21]">
            <div className="flex justify-between items-center w-full py-6 md:space-x-10 mx-auto text-white p-[35rem]">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <span className="sr-only">Workflow</span>   
                    <img 
                        className="h-8 w-auto sm:h-10"
                        src="https://community.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
                        alt="steam"
                    />
                </div>

                
                <a href="#" className="text-base font-medium text-gray-600 hover:text-white">
                    SHOP
                </a>

                <a href="#" className="text-base font-medium text-gray-600 hover:text-white">
                    CLIMA
                </a>
                
                

                <div className="flex jusitfy-end">
                    <a href="auth/signin" className="text-base font-medium text-gray-600 hover:text-white">
                        SIGN UP
                    </a>    
                </div>
            </div>
        </div>
    )
}

export default Header
