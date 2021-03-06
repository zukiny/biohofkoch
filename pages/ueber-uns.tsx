import CustomHead from '../components/custom_head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import HeroUnderlineSvg from '../components/animated_svgs/hero/underline'
import { attributes } from '../content/ueber-uns.md'
import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'
const FadeInWhenVisible = dynamic(() => import('../components/fade_in_when_visible'))
const ImageSection = dynamic(() => import('../components/image_section'))

export default function Page() {
	return (
		<Layout>
			<CustomHead
				metaTitlePrefix={attributes.heroHeader}
				metaTitle={attributes.title}
				metaDescription={attributes.description}
				ogImage={attributes.heroImage}
			/>
			<div className='mb-default'>
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>

			<div className='mb-default container lg:px-32'>
				{attributes.profiles?.map((profile, index, { length }) => {
					return (
						<div key={profile.profileName} className={`${index + 1 !== length ? 'mb-default' : ''}`}>
							<ImageSection
								textSmall={
									<>
										<h2 className='text-6xl xl:text-header font-handwriting mb-4'>{profile.profileName}</h2>
										<ReactMarkdown children={profile.profileText} />
										<ReactMarkdown children={profile.profileQuote} />
									</>
								}
								imageSrcBig={profile.profileImage}
								switchedOnDesktop={index % 2 !== 0}
							/>
						</div>
					)
				})}
			</div>

			<section className='mb-default container'>
				<FadeInWhenVisible>
					<h2 className='header'>{attributes.title1}</h2>
					<HeroUnderlineSvg />
					<ReactMarkdown children={attributes.text1} className='mb-default mt-8 text-indented-desktop' />
				</FadeInWhenVisible>
				<ImageSection imageSrcSmall={attributes.image1} imageSrcBig={attributes.image2} switchedOnDesktop={true} />
			</section>

			{/* use height of navigation / nav-spacer for scroll-margin */}
			<section className='mb-default container' id='maerkte' style={{ scrollMarginTop: '100px' }}>
				<ImageSection
					textSmall={
						<>
							<h2 className='header mb-4'>{attributes.title2}</h2>
							<ReactMarkdown children={attributes.text2} />
						</>
					}
					imageSrcBig={attributes.image3}
				/>
			</section>
		</Layout>
	)
}
