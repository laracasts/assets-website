@php
    $classes = "font-none group flex items-center rounded-[12px] px-3 py-2 text-left text-sm hover:bg-card-600 hover:text-blue-400";

    $activeClasses = "bg-card-600 text-blue-400";

    if ($attributes['active'] ?? false) {
        $classes .= " " . $activeClasses;
    }
@endphp

<router-link {{ $attributes() }}
             theme="dark"
             class="{{ $classes }}"
            active-class="{{ $activeClasses }}"
>
    <span aria-hidden="true"
          class="inline-block h-[16px] rounded-xl group-hover:scale-y-125 group-hover:bg-blue-400 scale-y-125 {{ $attributes['active'] ?? false ? 'bg-blue-400' : 'bg-blue/10' }}"
          style="transition-property: transform, background-color; transition-duration: 0.3s, 0.3s; transition-timing-function: ease, ease; transition-delay: 0.1s; transition-behavior: normal, normal; margin-right: 9px; width: 9px;">

    </span>
    {{ $slot }}
</router-link>
