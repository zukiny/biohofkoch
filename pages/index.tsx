import Head from "next/head"
import { useEffect } from "react"
import { attributes, react as MarkdownContent } from "../content/platzhalter.md"
import Layout from "../components/layout"

export default function Home() {
	useEffect(() => {
		console.log(attributes)
	})

	return (
		<Layout showNav={false}>
			<Head>
				<title>{attributes.title}</title>
				<meta name="description" content={attributes.description} />
				<meta property="og:image" content={attributes.backgroundimage} />
			</Head>
			<div className="min-h-screen flex flex-col lg:flex-row">
				{/* background image container */}
				<div className="flex relative h-[40vh] lg:h-auto lg:w-2/3">
					<img src={`/${attributes.backgroundimage}`} alt="Hintergrundbild" className="absolute w-full h-full object-cover object-top" />
					{/* mobile logo */}
					<img
						src="/assets/images/logo-with-border-white.svg"
						alt="Biohof Koch Logo"
						className="lg:hidden absolute left-1/2 md:left-8 top-full transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-1/3 sm:w-1/4 md:w-1/5 bg-white"
					/>
					{/* desktop logo */}
					<img
						src="/assets/images/logo-with-border.svg"
						alt="Biohof Koch Logo"
						className="hidden lg:block absolute left-full top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-1/2 w-[345px]"
					/>
				</div>
				{/* placeholder for the overlapping part of the visible mobile logo. should always have 1/2 of its width. */}
				<img src="/assets/images/logo-with-border.svg" alt="Logo Placeholder" className="invisible w-1/6 sm:w-1/8 md:w-1/10 lg:hidden" />
				{/* info container */}
				<div className="container max-w-none flex-grow mt-8 pb-12 lg:mt-0 lg:p-12 xl:p-20 flex flex-col lg:w-1/3">
					<div className="mt-auto mb-6 lg:mb-16">
						<h1 className="font-sans uppercase font-extrabold text-sm tracking-wide mb-4">Biohof Koch</h1>
						<MarkdownContent />
					</div>
					<a href={attributes.facebooklink} target="_blank" rel="noreferrer" className="flex items-center flex-wrap">
						<img src="/assets/images/facebook.svg" alt="facebook icon" className="inline mr-5" />
						<span className="uppercase font-extrabold text-sm tracking-wide">Biohof Koch</span>
					</a>
				</div>
			</div>
		</Layout>
	)
}
