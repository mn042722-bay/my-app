import React { useCallback, useState } from 'react'
import styled from 'styled-components'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * 最小行数
     */
    minRows?: number
    /**
     * 最大行数
     */
    maxRows?: number
    /**
     * バリデーションエラーフラグ
     */
    hasError?: boolean
    /**
     * バリデーションエラーメッセージ
     */
  }

  /**
   * スタイルを適用
   */

  const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
   color: ${({ theme }) => theme.colors.input.Text};
   border: 1px solid ${({ theme, hasError }) => hasError ? theme.colors.danger : theme.colors.border};
   border-radius: 5px;
   box-sizing: border-box;
   outline: none;
   width: 100%;
   font-size: 16px;
   line-height: 24px;
   padding: 9px 12px 10px 12px;
   resize: none;
   overflow: hidden;
   height: auto;

   &::placeholder {
   color: ${({ theme }) => theme.colors.text.placeholder};
   }
  `

  /**
   * テキストエリア
   */
  const TextArea = (props: TextAreaProps) => {
    const { 
      rows = 5,
      minRows = 5,
      maxRows = 10,
      children,
      hasError,
      onChange,
      ...rest
    } = props

    const [ textareaRows, setTextareaRows] = useState(Math.min(rows, minRows))

    // 最低な行数より未満指定しないようにする

  console.assert {
    !(rows < minRows),
    'TextArea: rows should be greater than minRows',
  }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 24
    const previousRows = e.target.rows

    e.target.rows = minRows // 行数のリセット

    // 現在の行数

  const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

  if (currentRows >= previousRows) {
    e.target.rows = currentRows
  }

  if(currentRows <= maxRows) {
    e.target.rows = maxRows
    e.target.scrollTop = e.target.scrollHeight
  }

  //最大を超えないように行数をセット
  setTextareaRows(Math.min(currentRows, maxRows))
  onChange && onChange(e)
}, [minRows, maxRows, onChange])

  return (
    <StyledTextArea
      hasError={hasError}
      rows={textareaRows}
      onChange={handleChange}
      aria-invalid={rest.placeholder}
      {...rest}
    >
      {children}
    </StyledTextArea>
  )
}

TextArea.defaultProps = {
  rows: 5,
  minRows: 5,
  maxRows: 10,
}

export default TextArea