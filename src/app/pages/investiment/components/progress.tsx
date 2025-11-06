"use client"

import * as React from "react"
import * as Progress from "@radix-ui/react-progress"

export function ProgressBar({ value = 0 }: { value: number }) {
    return (
        <Progress.Root value={value} max={100} className="relative h-2 bg-gray-200 rounded">
            <Progress.Indicator
                className={`absolute top-0 left-0 h-full bg-blue-600 rounded transition-all duration-300`}
                style={{ width: `${value}%` }}
            />
        </Progress.Root>
    )
}
