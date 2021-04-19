export const flexibleBoxClasses: { [key in FlexibleBoxClasses]: string } = {
  alignContentBaseline: 'align-content-baseline',
  alignContentCenter: 'align-content-center',
  alignContentEnd: 'align-content-end',
  alignContentSpaceAround: 'align-content-space-around',
  alignContentSpaceBetween: 'align-content-space-between',
  alignContentSpaceEvenly: 'align-content-space-evenly',
  alignContentStart: 'align-content-start',
  alignContentStretch: 'align-content-stretch',
  alignItemsBaseline: 'align-items-baseline',
  alignItemsCenter: 'align-items-center',
  alignItemsEnd: 'align-items-end',
  alignItemsStart: 'align-items-start',
  alignItemsStretch: 'align-items-stretch',
  alignSelfAuto: 'align-self-auto',
  alignSelfBaseline: 'align-self-baseline',
  alignSelfCenter: 'align-self-center',
  alignSelfEnd: 'align-self-end',
  alignSelfStart: 'align-self-start',
  alignSelfStretch: 'align-self-stretch',
  column: 'flexible-box-column',
  columnReverse: 'flexible-box-column-reverse',
  flex: 'flexible-box-flex',
  flexGrow: 'flexible-box-flex-grow',
  inlineFlex: 'flexible-box-inline-flex',
  justifyContentCenter: 'justify-content-center',
  justifyContentEnd: 'justify-content-end',
  justifyContentSpaceAround: 'justify-content-space-around',
  justifyContentSpaceBetween: 'justify-content-space-between',
  justifyContentSpaceEvenly: 'justify-content-space-evenly',
  justifyContentStart: 'justify-content-start',
  noWrap: 'flexible-box-no-wrap',
  row: 'flexible-box-row',
  rowReverse: 'flexible-box-row-reverse',
  wrap: 'flexible-box-wrap',
  wrapReverse: 'flexible-box-wrap-reverse',
}

export type FlexibleBoxClasses =
  | 'alignItemsStart'
  | 'alignItemsEnd'
  | 'alignItemsCenter'
  | 'alignItemsBaseline'
  | 'alignItemsStretch'
  | 'justifyContentStart'
  | 'justifyContentEnd'
  | 'justifyContentCenter'
  | 'justifyContentSpaceAround'
  | 'justifyContentSpaceEvenly'
  | 'justifyContentSpaceBetween'
  | 'alignContentStart'
  | 'alignContentEnd'
  | 'alignContentCenter'
  | 'alignContentSpaceAround'
  | 'alignContentSpaceEvenly'
  | 'alignContentSpaceBetween'
  | 'alignContentBaseline'
  | 'alignContentStretch'
  | 'alignSelfStart'
  | 'alignSelfEnd'
  | 'alignSelfCenter'
  | 'alignSelfBaseline'
  | 'alignSelfStretch'
  | 'alignSelfAuto'
  | 'column'
  | 'row'
  | 'columnReverse'
  | 'rowReverse'
  | 'wrap'
  | 'noWrap'
  | 'wrapReverse'
  | 'flex'
  | 'flexGrow'
  | 'inlineFlex'
