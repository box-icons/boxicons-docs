import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import pkg from '../package.json'
import React from 'react'
// Get the default MDX components
const themeComponents = getThemeComponents()
function replaceVersion(node, version) {
  if (typeof node === 'string') {
    return node.replaceAll('{{VERSION}}', version)
  }

  // Handle arrays of children (the source of the key warning)
  if (Array.isArray(node)) {
    return React.Children.map(node, child => replaceVersion(child, version))
  }

  // Handle React elements (spans, etc.)
  if (React.isValidElement(node)) {
    const children = node.props && (node.props).children
    if (children) {
      return React.cloneElement(node, {
        ...node.props,
        // Recursively process children
        children: replaceVersion(children, version)
      })
    }
  }

  return node
}
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    Version: () => ""+pkg.icon_version,
    pre: (props) => {
      // Process children to replace placeholders before rendering
      const newChildren = replaceVersion(props.children, pkg.icon_version)
      return themeComponents.pre({ ...props, children: newChildren })
    }
  }
}