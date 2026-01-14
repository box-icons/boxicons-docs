export default {
  '*': {
    theme: {
      timestamp: false,
    }
  },
  index: {
    title: 'Get Started',
    display: 'hidden',
    theme: {
      breadcrumb: false,
      pagination: false,
      toc: false,
    }
  },
  introduction: {
    title: 'Introduction'
  },
  license: {
    title: 'License'
  },
  '---':{
    "type": "separator",
  },
  font: {
    title: (
      <span className="flex items-center gap-2">
        <i className="bxdocs bxr-200-cursor-pen"  /> Font
      </span>
    )
    
  },
  figma: {
    title: (
      <span className="flex items-center gap-2">
        <i className="bxdocs bx-figma"  /> Figma Plugin
      </span>
    )
  },
  react: {
    title: (
      <span className="flex items-center gap-2">
        <i className="bxdocs bx-react"  /> React Package
      </span>
    )
  },
  icons: {
    title: 'Icons',
    type: 'page',
    href: 'https://boxicons.com/icons'
  },
  pricing: {
    title: 'Pricing',
    type: 'page',
    href: 'https://boxicons.com/pricing'
  }
}
