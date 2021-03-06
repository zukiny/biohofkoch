import CustomHead from '../components/custom_head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import { attributes } from '../content/suesse-knolle.md'
import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'
const ImageSection = dynamic(() => import('../components/image_section'))
const FadeInWhenVisible = dynamic(() => import('../components/fade_in_when_visible'))

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
			
			<div className='container mb-default'>
				<ImageSection textSmall={attributes.galleryText} imageSrcBig={attributes.galleryImage} />
			</div>

			<FadeInWhenVisible>
				<div className='container mb-default flex flex-col lg:flex-row'>
					<div className='flex items-center justify-center lg:w-1/2'>
						<img src='/assets/images/logo-suesse-knolle-with-border.svg' alt='Logo Süße Knolle' className='w-1/2 mb-10 lg:mb-0' />
					</div>
					<div className='lg:w-1/2'>
						<h2 className='mb-4 header'>{attributes.shippingHeader}</h2>
						<ReactMarkdown children={attributes.shippingText1} className='mb-8' />
						<div className='mb-8'>
							<table>
								<thead>
									<tr>
										<th colSpan={2} className='text-left subheader pb-4'>
											{attributes.priceHeader}
										</th>
									</tr>
								</thead>
								<tbody>
									{attributes.priceitems?.map((priceitem, index) => (
										<tr key={index}>
											<td className='pr-6'>{priceitem.quantity}</td>
											<td>{priceitem.text}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<ReactMarkdown children={attributes.shippingText2} />
					</div>
				</div>
			</FadeInWhenVisible>

			<div className='container mb-default'>
				<ImageSection imageSrcSmall={attributes.galleryImage1} imageSrcBig={attributes.galleryImage2} />
			</div>
		</Layout>
	)
}
