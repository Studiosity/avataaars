import Option from './Option'

export { default as Option } from './Option'
export { default as OptionContext, OptionContextState } from './OptionContext'
export { default as Selector } from './Selector'
export { OptionContextProvider, useOptionContext } from './OptionContextProvider'

export const TopOption = new Option({
  key: 'topType',
  label: 'Top',
})

export const AccessoriesOption = new Option({
  key: 'accessoriesType',
  label: '↳ 👓 Accessories',
})

export const HatColorOption = new Option({
  key: 'hatColor',
  label: '🎨 HatColor',
})

export const HairColorOption = new Option({
  key: 'hairColor',
  label: '↳ 💈 Hair Color',
})

export const FacialHairOption = new Option({
  key: 'facialHairType',
  label: 'Facial Hair',
})

export const FacialHairColor = new Option({
  key: 'facialHairColor',
  label: '↳ ✂️ Facial Hair Color',
})

export const ClotheOption = new Option({
  key: 'clotheType',
  label: '👔 Clothes',
})

export const ClotheColorOption = new Option({
  key: 'clotheColor',
  label: '↳ Color Fabric',
})

export const GraphicOption = new Option({
  key: 'graphicType',
  label: '↳ Graphic',
})

export const EyesOption = new Option({
  key: 'eyeType',
  label: '👁 Eyes',
})

export const EyebrowOption = new Option({
  key: 'eyebrowType',
  label: '✏️ Eyebrow',
})

export const MouthOption = new Option({
  key: 'mouthType',
  label: '👄 Mouth',
})

export const SkinOption = new Option({
  key: 'skinColor',
  label: '🎨 Skin',
})

export const allOptions = [
  TopOption,
  AccessoriesOption,
  HatColorOption,
  HairColorOption,
  FacialHairOption,
  FacialHairColor,
  ClotheOption,
  ClotheColorOption,
  GraphicOption,
  EyesOption,
  EyebrowOption,
  MouthOption,
  SkinOption,
]
