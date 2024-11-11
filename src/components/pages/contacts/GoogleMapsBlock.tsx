export default function GoogleMapsBlock(): JSX.Element {
  return (
    <div className='w-full md:w-2/3 max-w-[700px] h-96 rounded-md overflow-hidden'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.7208791730013!2d30.46315617558173!3d50.48353978498198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdea5a32026f%3A0xda0d5e265fef2688!2z0LLRg9C70LjRhtGPINCf0LXRgtGA0L7Qv9Cw0LLQu9GW0LLRgdGM0LrQsCwgMTUsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1729939576669!5m2!1suk!2sua" width="100%" height="100%" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
  </div>
  )
}