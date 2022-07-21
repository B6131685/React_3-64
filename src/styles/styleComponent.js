import styled from 'styled-components'


// เป็นเพราะลง styled-components ทำให้สามารถเขียน css แบบปกติไม่ต้องเขียนแบบ JSX 
// ตัวอย่างการใช้ที่ component Header
const Tite = styled.span`
    font-size: 30px;
    color:green;
`

export { Tite }