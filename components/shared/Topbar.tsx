import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs"
import { Organization } from "@clerk/nextjs/server"
import { dark } from "@clerk/themes"
import Image from "next/image"
import Link from "next/link"

function Topbar(){
    return (
        <nav className="topbar">
           <Link href="/" className="flex items-center gap-4"
           >
            <Image src="/assets/logo.svg" alt="logo" width={28} height={28} className=""/>
            <p className="text-heading3-bold text-light-1 max-xs:hidden">SocioCell</p>
            </Link> 

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image
                                src="/assets/logout.svg"
                                alt = "logout"
                                width={24}
                                height={24}
                                />

                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher
                appearance={
                    {
                        baseTheme:dark,
                        elements: {
                            organizationSwitcherTrigger: ""
                                
                            
                        }
                    }
                }
                />
            </div>
        </nav>
    )
}

export default Topbar