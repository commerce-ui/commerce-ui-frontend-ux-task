type ImageProps = { resource_type: 'image'; src: string; width: number; height: number }
type VideoProps = { resource_type: 'video'; src: string; width: number; height: number; format: string }

export type CardProps = {
  title: string
  media: ImageProps | VideoProps
  href: string
}
