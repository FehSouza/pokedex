import { Outlet, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getPokemon } from '../../services'
import * as S from './styles'

export const Container = () => {
  const params = useParams()
  const { data: pokemon } = useSWR(`/pokemon/${params.id}`, () => getPokemon(`/pokemon/${params.id}`))

  return (
    <S.Container>
      {pokemon && (
        <>
          <S.Header color={`background-type-${pokemon.types[0].type.name}`}>
            <S.ShadowWrapper>
              <S.Shadow color={`background-type-${pokemon.types[0].type.name}`} />
              <S.ShadowName>{pokemon.name}</S.ShadowName>
            </S.ShadowWrapper>
          </S.Header>
          <Outlet />
        </>
      )}
    </S.Container>
  )
}
