import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import SearchView from '@/views/search-view.vue'
import Header from "@/components/header.vue";

describe('SearchView', () => {
	test('mount the view', () => {
		const wrapper = mount(SearchView)

		expect(wrapper.exists).toBeTruthy()
	})

	test('show header component', () => {
		const wrapper = mount(SearchView)
		
		const header = wrapper.findComponent(Header)

		expect(header.isVisible()).toBeTruthy()
	})
})