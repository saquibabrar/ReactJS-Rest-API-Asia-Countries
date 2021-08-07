import React, {useState,useEffect} from 'react'


const url='https://restcountries.eu/rest/v2/region/Asia'

const Countries = () => {
    const [countries, setCountries] = useState([])

        const fetchCountryData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
            console.log(countries)
        }

    useEffect(() => {
        fetchCountryData()
    }, [])

    return (
    <>  
        <div className="button">
        <button className="btn" onClick={() => fetchCountryData()}>REFRESH</button>
        </div>
        <section className='grid'>
        {countries.map((country) => {
            const { numericCode, name, flag, capital, region, subregion, population, borders,languages} = country;
            const CountryLanguages={languages};
            return (
                <article key={numericCode}>
                    <div>
                        <img src={flag} alt={name} />
                        <div className="details">
                            <h3> {name} </h3>
                            <h4>Capital: <span>{capital}</span></h4>
                            <h4>Region: <span>{region}</span></h4>
                            <h4>Sub-Region: <span>{subregion}</span></h4>
                            <h4>Population: <span>{population}</span></h4>
                            <h4> Languages: <span><ul>{(CountryLanguages.languages).map((lang) => {
                                return(
                                    <li>{lang.name}</li>
                                )
                            })}</ul></span></h4>
                            
                            <h4>Borders: <span><div className="borders">{borders.map((border) =>{
                                    return(
                                        <ul key={border}>
                                            <li>{border}</li>
                                            </ul>
                                    )
                            })}
                            </div></span></h4>
                        </div>
                    </div>
                </article> 
            )
        })}
        </section>
    </>
    )
 }

export default Countries
