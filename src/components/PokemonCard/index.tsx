import { useNavigate } from 'react-router-dom'
import { PokemonCardProps, icons } from '..'
import { ReactComponent as PatternIcon } from '../../assets/icons/6x3.svg'
import * as S from './styles'

export const PokemonCard = ({ item }: PokemonCardProps) => {
  const navigate = useNavigate()
  const handleNavigate = (id: number) => navigate(`/about/${id}`)

  return (
    <S.PokemonCard
      key={item.id}
      onClick={() => handleNavigate(item.id)}
      color={`background-type-${item.types[0].type.name}`}
      layoutId={`bg-${item.id}`}
    >
      <S.ImageWrapper>
        <S.Image src={item.sprites.other['official-artwork'].front_default} alt="" layoutId={`img-${item.id}`} />
      </S.ImageWrapper>

      <S.InfoWrapper>
        <S.Id layoutId={`id-${item.id}`}>{`#${String(item.id).padStart(3, '0')}`}</S.Id>
        <S.Name layoutId={`name-${item.id}`}>{item.name}</S.Name>

        <S.TypesWrapper>
          {item.types.map((elem) => {
            const Icon = icons[elem.type.name]

            return (
              <S.Type layoutId={`type-${item.id}-${elem.type.name}`} key={elem.type.name} color={`type-${elem.type.name}`}>
                <Icon />
                <S.TypeName>{elem.type.name}</S.TypeName>
              </S.Type>
            )
          })}
        </S.TypesWrapper>
      </S.InfoWrapper>

      <S.ShadowWrapper layoutId={`icon-${item.id}`}>
        <S.Shadow color={`background-type-${item.types[0].type.name}`} />
        <PatternIcon />
      </S.ShadowWrapper>
    </S.PokemonCard>
  )
}
