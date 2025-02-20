import Section from '@/components/section';
import Heading from '@/components/heading';
import Box from './components/box';
import { ErrorBoundary } from 'react-error-boundary';
import PrintError from '../auto-headings-level/components/error';

export default function UnderstandingContextPage() {
  return (
    <Section level={2} className="flex flex-col gap-2">
      <Heading>컨텍스트 이해</Heading>
      <ErrorBoundary FallbackComponent={PrintError}>
        <Box>
          <Box>
            <Box>
              <Box>
                <Box>
                  <Box>
                    <Box />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ErrorBoundary>
    </Section>
  );
}
