import CustomHead from '../components/custom_head'
import { attributes, react as MarkdownContent } from '../content/platzhalter.md'
import Layout from '../components/layout'

export default function Placeholder() {
	return (
		<Layout showNav={false} showFooter={false}>
			<CustomHead
				metaTitlePrefix={attributes.heroHeader}
				metaTitle={attributes.title}
				metaDescription={attributes.description}
				ogImage={attributes.heroImage}
			/>
			<div className='min-h-screen flex flex-col lg:flex-row'>
				{/* background image container */}
				<div className='flex relative h-[40vh] lg:h-auto lg:w-2/3'>
					<img src={`/${attributes.backgroundimage}`} alt='Hintergrundbild' className='absolute w-full h-full object-cover object-top' />
					{/* mobile logo */}
					<img
						src='/assets/images/logo-with-border-white.svg'
						alt='Biohof Koch Logo'
						className='lg:hidden absolute left-1/2 md:left-8 top-full transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-1/3 sm:w-1/4 md:w-1/5'
					/>
					{/* desktop logo */}
					<img
						src='/assets/images/logo-with-border.svg'
						alt='Biohof Koch Logo'
						className='hidden lg:block absolute left-full top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-1/2 w-[345px]'
					/>
				</div>
				{/* placeholder for the overlapping part of the visible mobile logo. should always have 1/2 of its width. */}
				<img src='/assets/images/logo-with-border.svg' alt='Logo Placeholder' className='invisible w-1/6 sm:w-1/8 md:w-1/10 lg:hidden' />
				{/* info container */}
				<div className='container max-w-none flex-grow mt-8 pb-12 lg:mt-0 lg:p-12 xl:p-20 flex flex-col lg:w-1/3'>
					<div className='mt-auto mb-6 lg:mb-16 animated-underlines'>
						<h1 className='subheader mb-4'>Biohof Koch</h1>
						<div className='p-no-mb'>
							<MarkdownContent />
						</div>
					</div>
					<a href={attributes.facebooklink} target='_blank' rel='noreferrer' className='flex items-center flex-wrap animated-underlines'>
						<img
							src='/assets/images/facebook.svg'
							alt='facebook icon'
							width='22px'
							height='22px'
							className='inline mr-4 object-contain object-center'
						/>
						<span className='subheader animated-underlines-target'>Biohof Koch</span>
					</a>
				</div>
			</div>
		</Layout>
	)
}
