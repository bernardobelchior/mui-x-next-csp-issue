'use client';

import { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  AlertCircle,
  CheckCircle2,
  Download,
  FileText,
  Info,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const salesData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
];

const performanceData = [65, 59, 80, 81, 56, 55, 72];
const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Home() {
  const [cspViolations, setCspViolations] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-8 w-8 text-slate-700" />
            <h1 className="text-4xl font-bold text-slate-900">
              MUI X Charts CSP Nonce Demo
            </h1>
          </div>
          <p className="text-slate-600 text-lg">
            Demonstrating Content Security Policy (CSP) nonce support for chart
            export functionality
          </p>
        </div>

        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900">About This Demo</AlertTitle>
          <AlertDescription className="text-blue-800">
            This application demonstrates the CSP nonce issue with MUI X Charts
            export functionality. The app has strict CSP headers enabled, and
            chart exports may trigger violations if nonce support is not
            properly implemented.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <Card className="border-slate-200 shadow-md">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                CSP Configuration
              </CardTitle>
              <CardDescription>Active Content Security Policy</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div>
                  <Badge variant="outline" className="mb-2">
                    style-src-elem
                  </Badge>
                  <code className="block text-xs bg-slate-100 p-2 rounded">
                    'self' 'nonce-[random]'
                  </code>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    style-src-attr
                  </Badge>
                  <code className="block text-xs bg-slate-100 p-2 rounded">
                    'unsafe-inline'
                  </code>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    script-src
                  </Badge>
                  <code className="block text-xs bg-slate-100 p-2 rounded">
                    'self' 'nonce-[random]' 'strict-dynamic'
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Implementation Details
              </CardTitle>
              <CardDescription>Current Setup</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">@mui/x-charts:</span>
                  <span className="font-mono text-slate-900">8.14.0</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-slate-600">@mui/material:</span>
                  <span className="font-mono text-slate-900">7.1.1</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-slate-600">Next.js:</span>
                  <span className="font-mono text-slate-900">13.5.1</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    AppRouterCacheProvider:
                  </span>
                  <span className="font-mono text-slate-900">Enabled</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-slate-600">Nonce Support:</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {cspViolations.length > 0 && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-900">
              CSP Violations Detected
            </AlertTitle>
            <AlertDescription className="text-red-800">
              <div className="mt-2 space-y-1">
                {cspViolations.map((violation, index) => (
                  <div
                    key={index}
                    className="text-xs font-mono bg-red-100 p-2 rounded"
                  >
                    {violation}
                  </div>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="bar" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="line">Line Chart</TabsTrigger>
          </TabsList>

          <TabsContent value="bar" className="space-y-4">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="flex items-center justify-between">
                  <span>Sales Performance</span>
                  <Download className="h-5 w-5 text-slate-600" />
                </CardTitle>
                <CardDescription>
                  Monthly sales and revenue data with export toolbar
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="w-full h-[400px] flex items-center justify-center bg-white rounded-lg border border-slate-200">
                  <BarChart
                    xAxis={[
                      {
                        scaleType: 'band',
                        data: salesData.map((d) => d.month),
                      },
                    ]}
                    series={[
                      {
                        data: salesData.map((d) => d.sales),
                        label: 'Sales',
                        color: '#3b82f6',
                      },
                      {
                        data: salesData.map((d) => d.revenue),
                        label: 'Revenue',
                        color: '#10b981',
                      },
                    ]}
                    width={700}
                    height={350}
                  />
                </div>
                <Alert className="mt-4 border-amber-200 bg-amber-50">
                  <Info className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800 text-sm">
                    <strong>Note:</strong> Export toolbar is available in MUI X
                    Charts Pro. The free version shown here demonstrates the
                    component rendering with CSP compliance.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="line" className="space-y-4">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="flex items-center justify-between">
                  <span>Weekly Performance Trend</span>
                  <Download className="h-5 w-5 text-slate-600" />
                </CardTitle>
                <CardDescription>
                  Week-over-week performance metrics with export toolbar
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="w-full h-[400px] flex items-center justify-center bg-white rounded-lg border border-slate-200">
                  <LineChart
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    series={[
                      {
                        data: performanceData,
                        label: 'Performance Score',
                        color: '#8b5cf6',
                        curve: 'catmullRom',
                      },
                    ]}
                    width={700}
                    height={350}
                  />
                </div>
                <Alert className="mt-4 border-amber-200 bg-amber-50">
                  <Info className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800 text-sm">
                    <strong>Note:</strong> Export toolbar is available in MUI X
                    Charts Pro. The free version shown here demonstrates the
                    component rendering with CSP compliance.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-6 border-slate-200 shadow-md bg-slate-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Issue Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Problem:</h3>
                <p>
                  When using MUI X Charts Pro with export functionality enabled,
                  the chart export process creates inline styles or style
                  elements without proper nonce attributes, causing CSP
                  violations in strict security environments.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Expected Behavior:
                </h3>
                <p>
                  Similar to DataGrid's nonce prop, charts should accept a nonce
                  prop or automatically inherit it from AppRouterCacheProvider,
                  ensuring all dynamically created styles include the proper
                  nonce attribute for CSP compliance.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Workaround:
                </h3>
                <p>
                  Currently, teams must either relax their CSP rules (reducing
                  security) or implement custom export solutions. A built-in
                  nonce prop would resolve this issue.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
