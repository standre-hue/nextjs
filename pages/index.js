import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
    
      
    </div>
  )
}

export async function getStaticProps(){
  
  var res = await fetch('https://app-nuisible.herokuapp.com/api/rappels',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
  "data": {
    "date": "01/01/2022",
    "heure": "00h00",


  }
})
  })
  
 var data = await data.json()
 
 
 return{
 props:{
 data:data}
 }
 



}
