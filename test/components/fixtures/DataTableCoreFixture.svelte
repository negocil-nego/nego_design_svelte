<script lang="ts">
	import DataTableCore from '$lib/components/core/datatable/ui/DataTableCore.svelte';

	type Row = { id: number; name: string; email: string; status: string };

	const defaultItems: Row[] = [
		{ id: 1, name: 'Alice', email: 'alice@example.com', status: 'active' },
		{ id: 2, name: 'Bob', email: 'bob@example.com', status: 'pending' },
		{ id: 3, name: 'Carol', email: 'carol@example.com', status: 'active' },
		{ id: 4, name: 'Dave', email: 'dave@example.com', status: 'inactive' }
	];

	const config = [
		{ accessorKey: 'name', cell: 'name', header: 'Name', enableSorting: true },
		{ accessorKey: 'email', cell: 'email', header: 'Email' },
		{
			accessorKey: 'status',
			cell: 'status',
			header: 'Status',
			badge: [
				{ value: 'active', label: 'Active', className: 'bg-green-500' },
				{ value: 'pending' }
			]
		}
	];

	let { items = defaultItems }: { items?: Row[] } = $props();
</script>

<DataTableCore {config} columnFilter="email" items={items} />