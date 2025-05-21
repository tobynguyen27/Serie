"use client"

import { GithubIcon, MenuIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

interface NavbarItem {
	name: string
	path: string
}

const navbarItems: NavbarItem[] = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Mappings",
		path: "/mappings",
	},
	{
		name: "Tools",
		path: "/tools",
	},
]

export default function Navbar() {
	const { setTheme, theme } = useTheme()

	return (
		<div className='navbar bg-base-100 shadow-md'>
			<div className='navbar-start pl-3'>
				<div className='dropdown'>
					<div tabIndex={0} className='btn btn-ghost lg:hidden'>
						<MenuIcon />
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2'>
						{navbarItems.map((item, index) => (
							<li key={index}>
								<Link href={item.path} className='text-lg'>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Link href='/' className='font-mono text-2xl'>
					Serie_
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					{navbarItems.map((item, index) => (
						<li key={index}>
							<Link href={item.path} className='text-lg'>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='navbar-end pr-3'>
				<Link
					href={"https://github.com/tobynguyen27/serie"}
					className='btn btn-ghost btn-circle'>
					<GithubIcon />
				</Link>
				<button className='btn btn-ghost btn-circle'>
					<label className='swap swap-rotate'>
						<input
							type='checkbox'
							className='theme-controller'
							value={theme}
							onChange={() =>
								setTheme(theme === "light" ? "dark" : "light")
							}
						/>

						<SunIcon className='swap-on' />
						<MoonIcon className='swap-off' />
					</label>
				</button>
			</div>
		</div>
	)
}
