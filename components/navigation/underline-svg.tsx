import styles from "./underline-svg.module.scss"

export default function UnderlineSvg() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="95" height="3.904" viewBox="0 0 95 3.904" className={styles.svg}>
			{/* TODO: replace this path with only stroke no fill */}
			{/* get the stroke length by calling this in the browser:
			document.querySelector(".underline-path").getTotalLength() */}
			<path
				className={`${styles.path} underline-path`}
				d="M136.129,142.438h-.079c-9.365,0-18.9-.348-28.087-.679-10.436-.375-21.227-.768-31.868-.661-6.687.063-13.5.42-20.085.759-4.19.214-8.514.438-12.752.581a1.236,1.236,0,0,0-1,1.31,1.212,1.212,0,0,0,1.074,1.236c4.253-.152,8.585-.375,12.783-.589,5.458-.277,11.066-.554,16.619-.688H87.564c6.829.125,13.65.357,20.329.6,9.223.33,18.761.679,28.158.679a1.083,1.083,0,0,0,.838-.353,1.4,1.4,0,0,0,.367-.925,1.208,1.208,0,0,0-1.126-1.268Z"
				transform="translate(-42.256 -141.08)"
			/>
		</svg>
	)
}
