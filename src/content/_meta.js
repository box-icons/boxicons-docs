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
                <i className="bxdocs bx-react"  /> React
            </span>
        )
    },
    home_page: {
    title: 'Home Page',
    type: 'page',
    href: 'https://boxicons.com'
  }
}
