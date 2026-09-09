<script lang="ts">
	import * as DropdownMenu from '../../../src/lib/components/ui/dropdown-menu';

	let {
		open,
		defaultOpen = false,
		radioValue = '',
		onRadioValueChange,
		checkboxChecked = false,
		onCheckedChange,
		onSelect,
	}: {
		open?: boolean;
		defaultOpen?: boolean;
		radioValue?: string;
		onRadioValueChange?: (value: string) => void;
		checkboxChecked?: boolean;
		onCheckedChange?: (checked: boolean) => void;
		onSelect?: (value: string) => void;
	} = $props();
</script>

<DropdownMenu.Root {open} {defaultOpen}>
	<DropdownMenu.Trigger>Open menu</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Label>My Account</DropdownMenu.Label>
		<DropdownMenu.Item onSelect={() => onSelect?.('profile')}>Profile</DropdownMenu.Item>
		<DropdownMenu.Item>Billing</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.CheckboxGroup>
			<DropdownMenu.CheckboxItem
				checked={checkboxChecked}
				onCheckedChange={onCheckedChange}
			>
				Show status
			</DropdownMenu.CheckboxItem>
		</DropdownMenu.CheckboxGroup>
		<DropdownMenu.Separator />
		<DropdownMenu.RadioGroup value={radioValue} onValueChange={onRadioValueChange}>
			<DropdownMenu.RadioItem value="pt">PT</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem value="en">EN</DropdownMenu.RadioItem>
		</DropdownMenu.RadioGroup>
	</DropdownMenu.Content>
</DropdownMenu.Root>