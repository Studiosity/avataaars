import * as React from 'react'

import Avatar, { AvatarStyle } from './avatar'
import { OptionContext, allOptions } from './options'
import { OptionContextProvider } from './options/OptionContextProvider'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, OptionContext, allOptions } from './options'

import { default as PieceComponent } from './avatar/piece'

export interface Props {
  avatarStyle: string
  className?: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

export default class AvatarComponent extends React.Component<Props> {
  private optionContext: OptionContext = new OptionContext(allOptions)

  constructor (props: Props) {
    super(props)
    this.updateOptionContext(props)
  }

  componentDidUpdate (prevProps: Props) {
    const hasChanged = allOptions.some(option => prevProps[option.key] !== this.props[option.key]) ||
            prevProps.avatarStyle !== this.props.avatarStyle
    if (hasChanged) {
      this.updateOptionContext(this.props)
    }
  }

  render () {
    const { avatarStyle, style, className } = this.props
    return (
      <OptionContextProvider optionContext={this.optionContext}>
        <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} className={className} />
      </OptionContextProvider>
    )
  }

  private updateOptionContext (props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}

export class Piece extends React.Component<Props> {
  private optionContext: OptionContext = new OptionContext(allOptions)

  constructor (props: Props) {
    super(props)
    this.updateOptionContext(props)
  }

  componentDidUpdate (prevProps: Props) {
    const hasChanged = allOptions.some(option => prevProps[option.key] !== this.props[option.key]) ||
            prevProps.pieceType !== this.props.pieceType ||
            prevProps.pieceSize !== this.props.pieceSize ||
            prevProps.viewBox !== this.props.viewBox
    if (hasChanged) {
      this.updateOptionContext(this.props)
    }
  }

  render () {
    const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return (
      <OptionContextProvider optionContext={this.optionContext}>
        <PieceComponent avatarStyle={avatarStyle as AvatarStyle} style={style} pieceType={pieceType} pieceSize={pieceSize} viewBox={viewBox} />
      </OptionContextProvider>
    )
  }

  private updateOptionContext (props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}
