import { shallowMount } from '@vue/test-utils';
import { c_card } from '@/components/customs/cards';
import { c_image } from '@/components/ui';

describe('Card.vue', () => {
    it('renders props when passed', () => {
        const title = 'Test Title';
        const subtitle = 'Test Subtitle';
        const description = 'Test Description';
        const img = { src: 'test.jpg', alt: 'Test Image' };

        const wrapper = shallowMount(c_card, {
            propsData: { title, subtitle, description, img },
            stubs: { 'c_image': c_image }
        });

        expect(wrapper.find('.card-title').text()).toBe(title);
        expect(wrapper.find('.card-subtitle').text()).toBe(subtitle);
        expect(wrapper.find('.card-description').text()).toBe(description);
        expect(wrapper.findComponent(c_image).props()).toEqual(img);
    });

    it('renders correct structure when description is not provided', () => {
        const title = 'Test Title';
        const subtitle = 'Test Subtitle';
        const img = { src: 'test.jpg', alt: 'Test Image' };

        const wrapper = shallowMount(c_card, {
            propsData: { title, subtitle, img },
            stubs: { 'c_image': c_image }
        });

        expect(wrapper.find('h3.card-subtitle').exists()).toBe(true);
        expect(wrapper.find('h2.card-title').exists()).toBe(true);
        expect(wrapper.find('.card-description').exists()).toBe(false);
    });
});