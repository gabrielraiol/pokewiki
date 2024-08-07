import { describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils'

import Header from '@/components/header.vue'

import Pokeball from '@/assets/icons/pokeball.svg'
import Pokebwiki from '@/assets/icons/pokewiki.svg'

describe('Header', () => {
  test('mount the component', () => {
    const wrapper = mount(Header)

    expect(wrapper.exists()).toBeTruthy()
  })

  test('display pokeball icon', () => {
    const wrapper = mount(Header)
    
   const pokeballIcon = wrapper.findComponent(Pokeball)

   expect(pokeballIcon.isVisible).toBeTruthy()
  })

  test('display pokewiki icon', () => {
    const wrapper = mount(Header)
    
   const pokewikiIcon = wrapper.findComponent(Pokebwiki)

   expect(pokewikiIcon.isVisible).toBeTruthy()
  })
})